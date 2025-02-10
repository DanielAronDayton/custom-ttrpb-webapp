export default interface Ability {
    name: string,
    description: string,
    repeatable: string,
    cost: number,
    checked: boolean,
    children: Ability[]
}