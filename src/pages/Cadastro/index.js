import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import axios from "axios";

const Cadastro = () => {
  const paginacao = useNavigate();

  const links = [
    { label: "Home", link: "/" },
    { label: "FAQ", link: "/Faq" },
    { label: "Login", link: "/Login" },
  ];

  const [infoCad, setInfoCad] = useState({});
  const [error, setError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "confirmEmail") {
      setError(false);
    }
    setInfoCad((info) => ({ ...info, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault(false);
    if (infoCad.email !== infoCad.confirmEmail) {
      return setError(true);
    }
    console.log(infoCad);
    let body = {
      email: infoCad.email,
      name: infoCad.nome,
      password: infoCad.senha,
      date: infoCad.date,
      gender: infoCad.genero,
    };

    console.log(body);
    axios
      .post("http://localhost:3000/users", body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
    document.getElementById("cadForm").reset();
    // alert("Cadastrado com sucesso!");
    paginacao("/Home");
  }

  /* let btn = document.getElementById('revelaSenha');
    btn.addEventListener('click', () => {
        let input = document.getElementsByName('senha');
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
    }); */

  return (
    <div className="container1">
      <Header links={links} />
      <div className="content">
        <div className="card1">
          <h1 className="title">Inscreva-se grátis e comece a curtir.</h1>
          <form onSubmit={handleSubmit} className="form" id="cadForm">
            <Input
              name="email"
              type="email"
              onChange={handleChange}
              label="Qual é o seu e-mail?"
              placeholder="Insira seu e-mail."
              required
            />
            <Input
              name="confirmEmail"
              type="email"
              onChange={handleChange}
              label="Confirme seu e-mail"
              placeholder="Insira seu e-mail novamente."
              required
            />
            {error && (
              <p className="error-message">Email não são correspondentes!</p>
            )}
            <div className="SenhaWrapper">
              <Input
                name="senha"
                onChange={handleChange}
                label="Crie uma senha"
                placeholder="Crie uma senha."
                type="password"
                required
              />
              <span className="lnr lnr-eye" id="revelaSenha"></span>
            </div>
            <Input
              name="nome"
              onChange={handleChange}
              label="Como devemos chamar você?"
              placeholder="Insira seu nome de perfil."
              required
            />
            <Input
              name="date"
              onChange={handleChange}
              type="date"
              label="Qual a sua data de nascimento?"
              required
            />

            <Input
              name="genero"
              onChange={handleChange}
              type="radio"
              options={[
                { value: "Masculino", label: "Masculino" },
                { value: "Feminino", label: "Feminino" },
                { value: "NaoBinário", label: "Não binário" },
                { value: "Outros", label: "Outros" },
              ]}
              label="Qual é o seu gênero?"
            />
            <div className="button_submit_content">
              <button type="submit" className="button_submit">
                Inscreva-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Cadastro.defaultPropTypes = {};

export default Cadastro;
