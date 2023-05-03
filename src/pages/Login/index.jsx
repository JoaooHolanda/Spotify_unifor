import Header from "../../components/Header";
import face from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";
import google from "../../assets/images/google.png";
import "./login.css";
import Input from "../../components/Input";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const links = [
    { label: "Home", link: "/" },
    { label: "FAQ", link: "/Faq" },
    { label: "Cadastro", link: "/Cadastro" },
  ];

  const URL =
    "https://spotify-web-3c6f7-default-rtdb.firebaseio.com/dados.json";

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [emailsList, setEmailsList] = useState([]);
  const [senhasList, setSenhasList] = useState([]);

  const onChangeSenhaHandler = useCallback((event) => {
    setSenha(event.target.value);
  });
  const onChangeEmailHandler = useCallback((event) => {
    setEmail(event.target.value);
  });

  useEffect(() => {
    const fetchedData = axios.get(URL);
    console.log(fetchedData);
    const fetchedEmails = [];
    const fetchedSenhas = [];

    for (const key in fetchedData.data) {
      fetchedEmails.push(fetchedData.data[key].email);
      fetchedSenhas.push(fetchedData.data[key].senha);
    }

    setEmailsList((prevArray) => {
      return [...prevArray, fetchedEmails];
    });
    setSenhasList((prevArray) => {
      return [...prevArray, fetchedSenhas];
    });
  }, []);

  const onEnterAttempt = useCallback(() => {
    if (emailsList.contains(email) && senhasList.contains(senha))
      console.log("Entrou");
  });

  return (
    <div className="container1">
      <Header links={links} />
      <div>
        <h5>Para continuar, faça login no Spotify.</h5>
        <div className="btn">
          <a
            className="link"
            href="https://www.facebook.com/v7.0/dialog/oauth?client_id=174829003346&state=AQANu33hhrrxJAQhxgRYJvN3hM8IgsWQbwEYlYTj6H94eV8Pb5AKm48EoXr9iYuITueHOJad3i3lvk%2BXdon%2BLffRqJv8YxK1podKi%2FRRbXBD0wOM%2BtbAy%2Bpdha4V36UTEfljIIsXT0c22drP7O8uuIxIuRi4IK5uTso9Ou6AH8AMzsHNxI0fQXb3zitpLnd78c7zxyHQltWxYYSg8mTK4KOx9V52GRAgFgpgx1tNF9ydWifHu97Qy%2BtAJtuH36iNpye0Gjgn2SRetMlKh5%2B%2BsYl7BfYCae5SjC2AbZgw76YKfiMS3Z9WZuyOS%2BYxk8Xolbue4V3YBKtoV1Xdk24oTP6hv8IvKBQO&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect"
          >
            {" "}
            <img src={face} alt="logo facebook" />
            continuar com o facebook
          </a>
          <a
            className="link"
            href="https://appleid.apple.com/auth/authorize?client_id=com.spotify.accounts&response_type=code&response_mode=form_post&scope=name%20email&state=AQBNnqNCwFSlK4PB2fQ2%2F1mUV%2BgiCDHSrFTEogkCQK%2FG%2F6ZK91rdM0wduPb3UWBUfBmpBeK85JZAd2cdVaqyzsa216ICFCF5lwXPRJg%2BZ%2Bir0nTeHR3Eu7tuTDo6HEG4C0%2F07tGQ9eFdsh%2B0OmBYtm%2Foonylxk04YdZecP7mxcnhh%2BPCkt1W6CwHtSqKwcP2TYwoizjv0tQXnWKcwK2deMGhd4l%2FQGcs0MMFYZ8tTZ4I%2F7t1WbMIJUukt7YbR%2BV4%2FYj6FC%2B8NJK%2FjHPU%2Bw%3D%3D&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fapple%2Fredirect"
          >
            {" "}
            <img src={apple} alt="logo apple" />
            continuar com a apple
          </a>
          <a
            className="link"
            href="https://accounts.spotify.com/pt-BR/login/google?continue=https%3A%2F%2Fopen.spotify.com%2F%3F&flow_id=23775602-cadd-4018-8609-f44995ef4410:1679279950"
          >
            {" "}
            <img src={google} alt="logo google" />
            continuar com o google
          </a>
          <a
            className="link"
            href="https://accounts.spotify.com/pt-BR/login/phone?continue=https%3A%2F%2Fopen.spotify.com%2F%3F"
          >
            continuar com um número de telefone
          </a>
        </div>

        <div className="inputs">
          <div className="ou">
            <div className="line"></div>
            <p>ou</p>
            <div className="line"></div>
          </div>
        </div>

        <form>
          <div className="formulario">
            <Input
              name="email"
              label="Endereço de e-mail ou nome de usuário"
              placeholder="Endereço de e-mail ou nome de usuário"
              onChange={onChangeEmailHandler}
            />
            <Input
              name="senha"
              label="Senha"
              placeholder="Senha"
              onChange={onChangeSenhaHandler}
            />

            <label className="forget">
              <a
                href="https://accounts.spotify.com/pt-BR/password-reset?flow_id=b52aa718-874c-4de5-9ac5-e36b8fe8f909%3A1679335358"
                id="forgot-password"
              >
                Esqueceu sua senha?
              </a>
            </label>
            <div id="btns">
              <div className="checkbox">
                <input id="check" type="checkbox" />

                <label> &nbsp; Lembrar de mim</label>
              </div>

              <div id="submit">
                <input onClick={onEnterAttempt} value="Entrar" />
              </div>
              <div className=""></div>
            </div>
            <footer>
              <div className="break"></div>
              <h4>Não tem uma conta?</h4>
              <button>inscreva-se no spotify</button>
            </footer>
          </div>
        </form>
      </div>
    </div>
  );
}
