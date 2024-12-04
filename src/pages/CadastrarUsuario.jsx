import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import NavBarra from "../NavBarra";

// URL da API
const url = "http://localhost:5000/usuarios";
const fotoLoja = "img/bolo-chocolate-branco-tradicional.png";


const CadastroUsuario = () => {
  const navigate = useNavigate();

  // Variáveis de estado para os campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  // Variáveis de alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // Função para lidar com o envio do formulário
  const handleCadastro = async (e) => {
    e.preventDefault();

    // Validação dos campos
    if (!nome || !email || !senha || !confirmaSenha) {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("Todos os campos devem ser preenchidos.");
      return;
    }
    if (senha !== confirmaSenha) {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("As senhas não coincidem.");
      return;
    }

    try {
      const novoUsuario = { nome, email, senha };
      const req = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });

      if (req.ok) {
        setAlertVariant("success");
        setAlertMensagem("Cadastro realizado com sucesso!");
        setAlertClass("mb-3 mt-2");
        setTimeout(() => {
          alert("Cadastro efetuado com sucesso");
          navigate("/home"); // Redireciona para a página de login
        }, 2000);
      } else {
        setAlertMensagem("Erro ao realizar cadastro. Tente novamente.");
        setAlertClass("mb-3 mt-2");
      }
    } catch (error) {
      setAlertMensagem("Erro ao conectar ao servidor.");
      setAlertClass("mb-3 mt-2");
    }
  };

  return (
    
    <Container
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <img
        src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAACUCAMAAACEJ2RfAAAA4VBMVEX/////pgAsGQr/qACwq6YZAAD/ogAAAAAiCAD/2qj/qgD/pAD/oAD/rAAeAAD39vYAAAohEQomDwCemZbU0tGLhYE+NjZ1dHT//PhlX2Ckn5smFQocDQoqFQ7/zIdUSEHs6+q8ubb/tEH/+e94cGxcOQhlPwjRiARCKAnilQPvnAKnbQaVYAduRgiDfHfJxsU3Kinh3tz/7M//5ML/3bT+1Zv/xXj/vGf/rC7/qB55TQj/u1n+9eM2Hwm9egWLWQdKLwkVCxGahW3p39PLuqdKSkpgVU5FNy4zJR0mGxclIiPH2UjAAAALS0lEQVR4nO1aCXuqShJVcCGispsoJoEEREFFTG4WckWZmZj4/v8PmmrAhUXv8t4dIdMn3xdZGj5Od9Wpqu4ulTAwMDAwMDAwMDAwMDAwMDAwMDAwMDB+H1eAc3/DOXB1P394fLz4Brh4fHyY3///9ML9/OLm6fnu5bVcpmu1crn8+nL3/HRzMb8/95f9eVzNn9/uXmngTSNADyCgs9e7t+f51zaC708vr7WAdRqoF15fnr6f+xv/FO4f7prNQ+akme6DZvPu4Ss6ASJfO+RuuN5g1EhbQe0LdsD941uMPLC3BhPdG5EZblBrvj1+qQ6YP5VrcYotfWANvNWylSUD0Pjp4dzf/M/h5q6WVLuGsdT9yThz9JEG1F5uzv3V/xC+32VJPemxPmts2bcajURH0LW7LxEEHl/3dk+W9yRNo2xE0t8YcaOBl/SD2uvjub/9b+PqZh/rSNOAv10H7PtiZBDu0BqlPKBZdAe4fzqM9N5iyXpmyt0bru65luum0gDgX+gI8P3pUPO85XiytNyU2JPGeMDqYyN5HQnAc4EF4P45luVBnFuNB5Md/Z31N0bsSk75fjj+z4Ud/6u3ZlzyvSF7YPymSW7dnfZGRnYMpJtvRS2D3poJIx+51mqX57a8ibUwt2dH4j+g+XZuHr+Hp2aKSqO1C++kNx7oA8/IyPrJeG80n87N5HfwLZXpxTnqUPIY/jjh8ST4xAgAnkFGfUDXvp2by6/j4eUk+3LZcAl2NY6HQbI88twh5/vc0LUgKQpv0i+FKwC+v9UySe/R8FaTRdznW6PxkPVlgiBkzmf9iTUKLaD2VrDwB8neD9iD8o/MWKgnG57OcsQefX9lhdbRvCmW/M/LPzD9gC95OPaN8njRJ+Lg5EnAny7Pz83oV3D1Q9NPoWW6nEyk0NeDN9UKFf0vjpj+wXCTsbEnG8bQT5MHsHpo/hfn5vTzuGpmmj5UfNa2rIE8f2yQW5RHy5jXx/gHsZFuFmf4M3WvAaHO183QAloey7KcNQpgGGOZPUIe8fdQalSc4vc+a3anMVoSPjsmWyMP7pJDGGxuoQ8mk8lg6LMZXr+DvECpIU0Xpfa5ydA9CGoQ0Fmv7OkuGv7Q1Lk+IEvxYuBWiH+tIMN/f5cefNIKgpo/BhNAvtxaJWPcKfR1KAfpu2IM/7e07ZPWdohlWbZaSAXZE96e5g/hn34thPhfPadsn7QOuAb0y42Gd5LwcBE7ZZdkufZcBPGfp2yf9PoH7h3Sh/FfHQt10GY4GcYVAeSfvitC6peyfXIUc/SIftl0s/McBG6yTPSN3DfLdAEK3/unpO034jxlN5rWso7TX4yXSWlkl63aU/7Fb36XXM0zEiInhwu7pHHU+uWVp6fuyWYRrP8hWes1UiyDOAaJzPLY8HMTY5FKBvrgNPmf9khWOy0jHeHZoIxtHB1+bpzxEDdp5b/uuX9O0G9MMjiyXpD4W3J2wsd5RvohTi83c+/8yUku0hxmUORWgfqR4+zc7wh9Ov+TXnMy7votb5HBj2CDSRyyPM6sc7PpTxo0mXftmyddf5zp32w4v0+WrUVG8guVcLb0NfNO/yFJ382077CGR/wNl0214JbmJHXRB4Np5l36k8JPH6FvbZc3SNIYsAkXkHXaShpF8ETepT89wZ0exmB8F63d6lajZVq63Oe4fRyQLXMQTxXZYBNU3ie8U/TpbPqEr1v73Qxkq2F6Y1dfbI2A00fGalcnyRw3tAox35+in+HEEf++d7i6STZaoAP6tnHfNUfu0Pf7/b7vL/RxtC5cNPqkOThCf+GmF/Rbo53H+xODNKyl67pjyxtt58QLR3+Url1CeuP0hl7APkfyV0uDJE3TJPeL4oWjD3l9dl7Lpnc4xekTnD/Ul54R2/ZRNPqQ1meztzJ3s5qxcAeSJ6P6cN+0aPQTRa0MjBD8ccamDpQiZs1/1vf7vvNOP5H2xF1f5hYrHcHN2tKCXCVz9pfb7wDJe9qTTHqtA92XF2NvRCMRb2Wzb6VSvfC54c77c5/0xkqehO57qX3LcZBZtTHiv9wGvlreS57vr/uCl4zlPPLiNHmIEpnk0ZNRhkS/5r3eP5juIMl43r44Sf54lAhy4ILs8bnf7+ZrTRJTmZnbVg/ou0fXPXw3SBPyP9m1k36SdBNCxqU3M8dAZ80KRmCDkif3wg/SH852kWZqoYLTszO9ra+YgxOrXn2DLNNk3oV/6/zAPrVsL6+OhPstff3EQr+/Igvg+tEiF7DPmMNenHR+oH989IMtPkVY5CpdgJGak6wtG3J2ov9z9AnOaOXf9dEiX8McZs9wjU/7/injh6cHBVjiQ9sbvHq9moX6kq4dB23q2Y/tHv9XzuudEP+uHMN/Lk7h8ehzEVTm3NQwMDAwMDAwMDB+FYronLzPiKJYrDSv1wVokhqcOJfdCIy6PZKUXdvpe6fz3kNHjNDtho9o3W4luu2g+533qZP16pxCqlII/U8FTsROOzij6oxaD4/8292Ar4Om9S4cMpf1etAPpdtqWwgOGKEfPkH1hfirP3JsEFKbIK4pnmijjxQ7PJwE9Cv1a1TLXlfXW/pClSBmM56oS4h+dUuf4gO2zLrOU9ysM7vm+boWvpoKX139OAuzn4LU5m8rgkYQm0pA/1PoAQRGFHpdgvjsCRUlatml+CnjXFa7TBZ9rU5suhWFcXq3HFEPLklU8OpPom6fhdrPQGq30Vh1KUpC9KnO3lJ713znoGWXugZWSg81SNFXgX2kEo7GhYQlKni1RlWF/w2X30BEf9r+If1pm//YyliK/jtFaUp001mHvCP6U6ot/WkWvw2pDd/tqB/8dS80fkkASKgTEvQVnqdmkcoD/erUVlXV/uARfecvfrZXePSgg+gHr77lq73/KaVfAUjf53vnk+c3Tih9PEJdKaXol+w6tIpk/rJKfM4QCALRVzfUu7Jr6HT4mR1IH3o1wVeVUl6BlJ+i+HYdDR6i30bIpF+yq22iPkVHiD4RhLWQfo+i1nuvYcCIKqHyB6/Or/IFow/JihaEN2T82hSgZRg/uv8B/MO4XyU+bhEi+tfU+56+0uE3ajj6u1fnFIHvK9Gnn5Q+BKcLqt4LpS+UgVD67A3/vmcpziLjR6/+w9//NxEpf4gf0i8pGk9BgpRUfmUWSOf2nRSPbCFS/lzjF+irIvyzO/xfSjrwTavUrRi1gyZBqCskfeAGQGdx+o60QepmzzLpK5Dy3oYSB5GObyulQtLniUDQoBOS9CtQ0awrFeD2kZX0VuoE9dkVKr3uBsqCIAcoBP1qNU6fOgh81KHxa1WI4FXICdQY/XZIv1SptnmqWq1CpKuGGVCsZ3MKabO53J2I75sgl5kF9CuzzfthU22DeqaD2DKXm36o/OvNLMro7fUMdR0164q7V+eevqiq4u5EUSNUkPM7kNPG2qrS5aUUtoaE19kebJ9nbGmqTaXdM2LyeQyM/MMpMU5JsSHAKfDnKGDYjsOU4Beuwk2lhK6jf6ISncF9aAc/Z/70fwKSKlTE2+mnI2piz15/2FDDfzgl0Hy4eis4UkmwtSkjqFpXLSmSIonTtWCvb52plt+ZjZ8HQ9wyklpyPhB9VZJQUWOXKmutFAibeFkSxOlGFWxJACvRel1xKtj2VLM14UuI3bTHABEF6Ds99b0OV3pq6VPVbEl1uh8Ooq+pH5I6FUSgL8GwS6ota0zOp7V/FlKlpE7VaUVZCxVVWIto9J2uMO3ZUkWYOreiJHYdtQstnND4NUG0JfjpfYnRF0HfwP8h1PcUkDPgJCqiWGLEki1UGKZi24rNMPCvhy7CgVhRHUd04Ofcn46BgYGBgYGBgYGBgYGBgYGBgYGBgYGRb/wXdVRVt7/G+NQAAAAASUVORK5CYII="
        alt="Imagem Local"
        style={{
          width: "256px", // Largura da imagem
          height: "256px", // Altura da imagem
          borderRadius: "50%", // Borda arredondada (circular)
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Sombra para destaque
          objectFit: "cover", // Ajusta a imagem sem distorção
          display: "block", // Centraliza a imagem em elementos block
          margin: "20px", // Centraliza dentro do contêiner pai
        }}
      />
      <Form style={{ width: "75%" }} onSubmit={handleCadastro}>
        <FloatingLabel controlId="floatingNome" label="Nome" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSenha" label="Senha" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingConfirmaSenha"
          label="Confirmação de Senha"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Confirmação de Senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />
        </FloatingLabel>

        {/* Alerta para erros ou sucesso */}
        <Alert variant={alertVariant} className={alertClass}>
          {alertMensagem}
        </Alert>

        <Button variant="light" type="submit" className="mt-4" size="lg">
          Cadastrar
        </Button>
        
        
      </Form>
    </Container>
  );
};

export default CadastroUsuario;
