// App.tsx
import { AuthProvider } from "./AuthContext";
import AuthStatus from "./AuthStatus";

export default function App() {
  return (
    <AuthProvider>
      <AuthStatus />
    </AuthProvider>
  );
}
