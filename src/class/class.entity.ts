import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    classCode: string

    @Column()
    period: string

    @Column()
    description: string

    @Column({ nullable: true })
    createdAt: Date

    @Column({ nullable: true })
    updatedAt: Date

    @Column({ nullable: true })
    deletedAt: Date

    constructor(partial: Partial<Class>) {
        Object.assign(this, partial);
    }
}