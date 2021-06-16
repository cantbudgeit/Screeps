export const harvester: {
    run: (creep: Creep) => void;
    spawn: (room: any) => boolean;
    spawnData: (room: any) => {
        name: string;
        body: ("work" | "carry" | "move")[];
        memory: {
            role: string;
        };
    };
};
export const upgrader: {
    run: (creep: Creep) => void;
    spawn: (room: any) => boolean;
    spawnData: (room: any) => {
        name: string;
        body: ("work" | "carry" | "move")[];
        memory: {
            role: string;
        };
    };
};
export const builder: {
    run: (creep: Creep) => void;
    findConstructionSite: (creep: Creep) => void;
    spawn: (room: any) => boolean;
    spawnData: (room: any) => {
        name: string;
        body: ("work" | "carry" | "move")[];
        memory: {
            role: string;
        };
    };
};
