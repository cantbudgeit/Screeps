export function run(creep: Creep): void;
export function spawn(room: any): boolean;
export function spawnData(room: any): {
    name: string;
    body: ("move" | "work" | "carry")[];
    memory: {
        role: string;
    };
};
