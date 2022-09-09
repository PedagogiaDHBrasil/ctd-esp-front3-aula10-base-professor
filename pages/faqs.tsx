import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Faqs.module.css";

type FAQ = { id: number; title: string; description: string };

export interface IProps {
  data: FAQ[];
}

const FAQS: NextPage<IProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RandomIn - Perguntas frequentes</title>
        <meta
          name="description"
          content="Perguntas frequentes do uso do aplicativo RandomIn"
        />
      </Head>
      <h2 className={styles.colorText}>Perguntas frequentes</h2>
      {data.map(({ id, title, description }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://my-json-server.typicode.com/PedagogiaDHBrasil/ctd-front3-aula6-integracao-completo/db"
  );

  const data = await response.json();

  return {
    props: { data: data.faqs },
  };
}

export default FAQS;
