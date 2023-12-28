import { useRouter } from "next/router";

  export default function Title() {
    const { query } = useRouter()
    const title = (query.path && Array.isArray(query.path) ? query.path[query.path.length - 1] : '').replaceAll('-', ' ').replaceAll('_', ' ');
    return (
      <>
        {title}
      </>
    );
  }
  