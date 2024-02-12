import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>GM Quiz App</title>
      </Head>
      <main>
        <div>
          <h1>Quiz App</h1>
          <Link href='/quiz'>
            <buttton>Start Quiz</buttton>
          </Link>
        </div>
      </main>
    </>
  );
}
