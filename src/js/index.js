// src/index.js
import main from '../css/style.scss';
setTimeout(() => {
    console.log("je  vérifier que ma arrow function aura disparu au terme du processus de compilation de webpack.");
}, 500);

if (module.hot) {
    module.hot.accept('../css/style.scss', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}