const skills: string[] = ['BASH', 'COUNTER', 'HEALING'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['BASH', 'COUNTER'],
}

strider.hometown = 'Rivendell';

console.table({ strider });

export{};