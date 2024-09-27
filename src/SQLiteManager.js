// import React, { useEffect, useState } from 'react';
// import initSqlJs from 'sql.js';

// const SQLiteManager = () => {
//   const [db, setDb] = useState(null); // Stocke la base de données
//   const [users, setUsers] = useState([]); // Stocke les utilisateurs

//   useEffect(() => {
//     const initDB = async () => {
//       // Charger sql.js via WebAssembly
//       const SQL = await initSqlJs({
//         locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.wasm`,
//       });

//       // Initialiser la base de données en mémoire
//       const db = new SQL.Database();
//       setDb(db);

//       // Créer une table si elle n'existe pas
//       db.run(`CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT
//       )`);

//       // Charger les utilisateurs
//       loadUsers(db);
//     };

//     initDB();
//   }, []);

//   // Fonction pour insérer un utilisateur
//   const addUser = (name) => {
//     db.run('INSERT INTO users (name) VALUES (?)', [name]);
//     loadUsers(db); // Mettre à jour la liste des utilisateurs après insertion
//   };

//   // Charger les utilisateurs depuis la base de données
//   const loadUsers = (db) => {
//     const result = db.exec('SELECT * FROM users');
//     if (result.length > 0) {
//       const rows = result[0].values.map((row) => ({
//         id: row[0],
//         name: row[1],
//       }));
//       setUsers(rows);
//     }
//   };

//   return (
//     <div>
//       <h1>SQLite in React</h1>
//       <button onClick={() => addUser('John Doe')}>Add User</button>

//       <h2>Users List:</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {user.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SQLiteManager;
