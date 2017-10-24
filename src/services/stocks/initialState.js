import v4 from 'uuid/v4';

const depotId = v4();

export default [
    { id: v4(), depotId, token: 'A', name: 'Aktie A', dataPath: '/home/user/data/A.csv' },
    { id: v4(), depotId, token: 'B', name: 'Aktie B', dataPath: '/home/user/data/B.csv' },
    { id: v4(), depotId, token: 'C', name: 'Aktie C', dataPath: '/home/user/data/C.csv' },
    { id: v4(), depotId, token: 'D', name: 'Aktie D', dataPath: '/home/user/data/D.csv' },
    { id: v4(), depotId, token: 'E', name: 'Aktie E', dataPath: '/home/user/data/E.csv' },
];
