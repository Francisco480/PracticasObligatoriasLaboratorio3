import './App.css'
import Login from './components/login/Login';

function App() {
  const validateUserName = (newUser) => {

    if (newUser.includes('o') || newUser.includes('O')){
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }else if(newUser === ""){
      alert("Usuario inválido para registrarse");
    }else{
      alert("¡Usuario registrado correctamente!");
    }
    }

  return (
    <>
      <div>
        <Login validation={validateUserName}/>
      </div>
      
    </>
  )
}

export default App
