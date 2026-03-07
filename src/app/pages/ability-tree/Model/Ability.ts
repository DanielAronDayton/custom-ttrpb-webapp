export default interface Ability {
    name: string,
    usage_cost: string,
    range: string,
    traits: string,
    description: string,
    repeatable: string,
    ability_points: number,
    children: Ability[]
} 

// TODO: Decide on a consistent rule for small numbers in ability descriptions (1 vs one)
// TODO: Decide on a consistent wording for attack rolls and DCs
// TODO: Create a list of statuses and link to them in abilities