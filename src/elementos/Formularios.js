import styled from 'styled-components';

const colores = {
    borde: "#0075ff",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px){
        grid-template-columns: 1fr ;
        
    }
    `;
   /*  margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0; */
    
    const label = styled.label
      display: block;
      padding: 10px;
      min-height: 40px;
    ';
    

    const b-card{    
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -25px;
}

    export {Formulario};

    export default App