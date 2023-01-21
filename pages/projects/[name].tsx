import Link from "next/link";
import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  return (
    <>
      <h1>プロジェクト</h1>
      <p>
        {router.query.name}
        {
          JSON.stringify(router.query)
        }
      </p>
      <ul>
        {["izumiya", "summit", "life"].map( (name) => (
          <li>
            <Link href={`/projects/${name}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Name;