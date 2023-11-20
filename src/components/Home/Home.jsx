import React from "react";
import styles from "./Home.module.css";
import { ReactComponent as Logao } from "../../../public/images/logo.svg";
import Button from "./Button/Button";
import Buttons from "../Buttons/Buttons";
import Banner from "./Banner/Banner";
import PLanos from "./Planos/PLanos";
import Finally from "./Finally/Finally";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <section className={styles.cabecalho}>
        <div className={styles.menu}>
          <a href="/">
            <Logao />
          </a>
          <Button>Entrar</Button>
        </div>
        <h1 className={styles.title}>MovieFlow streaming de filmes e séries</h1>
        <h2 className={styles.subTitle}>
          {" "}
          Assista ao melhor do cinema na sua casa!
        </h2>
        <div className={styles.botao}>
          <Buttons>Assinar</Buttons>
        </div>
      </section>
      <Banner />
      <div className={styles.precos}>
        <PLanos
          title="Plano Mensal"
          list={[
            "-Um perfil por vez",
            "-Acesso a todo o nosso catálogo",
            "-Acesso a todos os filmes e series",
            "-Não consome o limite do cartão",
          ]}
          price={"R$ 29,99"}
        ></PLanos>
        <PLanos
          title="Plano Anual"
          list={[
            "-Até 3 perfis ao mesmo tempo",
            "-Acesso a todo o nosso catálogo",
            "-Acesso a todos os filmes e series",
            "-Renova automaticamente",
            "-Acesso ao nosso aplicativo de música",
            "-Acesso antecipado aos novos lançamentos",
          ]}
          price={"R$ 55,99"}
        ></PLanos>
      </div>
      <Finally/>
      <Footer/>
    </>
  );
};

export default Home;
