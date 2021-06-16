export function run(creep: Creep): void;
export function findConstructionSite(creep: Creep): void;
export function spawn(room: any): boolean;
export function spawnData(room: any): {
    name: string;
    body: ("work" | "carry" | "move")[];
    memory: {
        role: string;
    };
};
