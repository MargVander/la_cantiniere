// import { Injectable } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';

// /**
//  * Ce service gère :
//  * la récupération du jwt dans le localStorage
//  * la construction du header à inclure pour les requêtes
//  * HTTP vers l'API
//  */

<<<<<<< HEAD
/**
 * récupération du jwt dans le local storage
 */
const jwt = localStorage.getItem('jwt');
console.log(jwt);
=======
// /**
//  * récupération du jwt dans le local storage
//  */
// const jwt = localStorage.getItem('jwt');
>>>>>>> 5ec7eae8edd17e78c3068a6ce5b84ff042f8525b

// @Injectable({
//   providedIn: 'root'
// })
// export class HeaderService {

//   constructor() { }

//   headerBuilder() {
//     console.log('fuck');
//     /**
//      * création du header contenant le jwt
//      */
//     const httpOptions = {
//       headers: new HttpHeaders({
//         Authorization: `Bearer ${jwt}`
//         })
//     };

<<<<<<< HEAD
    /**
     * création du header contenant le jwt
     */
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${jwt}`
      })
    };

    return httpOptions;
  }
}
=======
//     return httpOptions;
    
//   }
// }
>>>>>>> 5ec7eae8edd17e78c3068a6ce5b84ff042f8525b
