import Image from "next/image";
import styles from "./page.module.css";
import newPic from "./assets/psychic-pokemon-weakness.jpg";

import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Supabase :3 </h1>
        {/* <Image
          src="
https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
          alt="GFG logo served with static path of public directory"
          height="100"
          width="400"
        /> */}
        <Image
          src={newPic}
          width={250}
          height={220}
          alt="ALAKAZAM!"
        />

        {/* <p className="">
          Experience our Auth and Storage through a simple profile management example. Create a user
          profile and upload an avatar image. Fast, simple, secure.
        </p> */}
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  );
}
