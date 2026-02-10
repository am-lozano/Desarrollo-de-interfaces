import * as signalR from '@microsoft/signalr';
import { IGameConnection } from '../domain/interfaces/IGameConnection';
import { Tablero } from '../core/types';
import { Platform } from 'react-native';

export class SignalRConnection implements IGameConnection {
    private hubConnection: signalR.HubConnection | null = null;
    private readonly url: string;

    constructor() {
        if (Platform.OS === 'web') {
            this.url = 'http://192.168.100.167:5000/gamehub';
        } else if (Platform.OS === 'android') {
            // Para emulador usa 10.0.2.2, para dispositivo físico usa tu IP local
            this.url = 'http://192.168.100.167:5000/gamehub';
        } else {
            this.url = 'http://192.168.100.167:5000/gamehub';
        }
    }

    async conectar(): Promise<void> {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(this.url, {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Information)
            .build();

        try {
            await this.hubConnection.start();
            console.log('Conectado a SignalR');
        } catch (error) {
            console.error('Error al conectar:', error);
            throw error;
        }
    }

    async colocarFicha(x: number, y: number): Promise<void> {
        if (!this.hubConnection) {
            throw new Error('No hay conexión establecida');
        }
        await this.hubConnection.invoke('ColocarFicha', x, y);
    }

    async desconectar(): Promise<void> {
        if (this.hubConnection) {
            await this.hubConnection.stop();
            this.hubConnection = null;
        }
    }

    onJugadorAsignado(callback: (ficha: string, esTuTurno: boolean) => void): void {
        this.hubConnection?.on('JugadorAsignado', callback);
    }

    onJuegoIniciado(callback: (tablero: Tablero, turnoActual: string) => void): void {
        this.hubConnection?.on('JuegoIniciado', callback);
    }

    onMovimientoRealizado(callback: (tablero: Tablero) => void): void {
        this.hubConnection?.on('MovimientoRealizado', callback);
    }

    onCambioTurno(callback: (turnoActual: string) => void): void {
        this.hubConnection?.on('CambioTurno', callback);
    }

    onJuegoTerminado(callback: (resultado: string, ganador: string | null) => void): void {
        this.hubConnection?.on('JuegoTerminado', callback);
    }

    onJugadorDesconectado(callback: () => void): void {
        this.hubConnection?.on('JugadorDesconectado', callback);
    }

    onError(callback: (mensaje: string) => void): void {
        this.hubConnection?.on('Error', callback);
    }
}