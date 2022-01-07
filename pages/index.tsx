import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  //Wallet connect function
  const connectWallet = () => {};

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js, Typescript, Tailwindcss Template</title>
        <meta name="description" content="Web3.0 Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://nextjs.org">Next.js, TypeScript, Tailwindcss!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing the Template
        </p>

        <button
          className="flex flex-row justify-center items-center my-5 bg-[#0070F3] p-3 rounded-full cursor-pointer hover:bg-[#055ACA]"
          onClick={connectWallet}
        >
          <p className="text-white text-base font-semibold">Connect Wallet</p>
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
