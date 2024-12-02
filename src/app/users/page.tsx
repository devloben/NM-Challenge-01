import React from "react";

async function page() {

  // Décommenter pour afficher la liste des Utilisateurs et le Loading
  // const users: string[] = await new Promise(resolve => {
  //   setTimeout(() => resolve(["Pomme", "Banane", "Pastèque", "Fraise", "Raisons"]),2000)
  // })

  // Décommenter pour afficher le message d'erreur
  const users: string[] = await new Promise((resolve,reject) => {
    setTimeout(() => reject(new Error('ERROR')),2000)
  })

 

  return (
    <main>
      <h1 className="text-4xl p-4">Utilisateurs</h1>
      <ul className="ml-5 bg-gray-500 shadow-xl rounded-lg w-1/2 p-4 space-y-3">
      {users.map((user: string, index:number) => (
        <li 
          key={index}
          className="text-white border-b last:border-none pb-2">
          
          {user}
        </li>
          )
        )
      }

      </ul>


    </main>

  )}

export default page;
