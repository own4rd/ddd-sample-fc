export default interface RepositoryInterface<T> {
    
    // VOID: Estou criando, não preciso retornar, pois já tenho esse objeto
    // Existem exceções
    create(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
    find(id: string): Promise<T>;
    findAll(): Promise<T[]>;
}
