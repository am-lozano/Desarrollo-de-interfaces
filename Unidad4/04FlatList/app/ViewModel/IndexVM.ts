import RepositoryPerson from "../Model/Data/RepositoryPerson";
import Person from "../Model/Entity/PersonModel";

class IndexVM{

    public getUsers() : Person[]{
        return RepositoryPerson.getPerson();
    }
}

export default IndexVM;