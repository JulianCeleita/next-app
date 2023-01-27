import Image from "next/image";

async function getData() {
  const response = await fetch('https://superheroapi.com/api/1646193842463635/414/image');
  return response.json();
}

async function Dashboard() {
  const data = await getData();

  return (
      <div>
        <Image width="350" height="350" src={data.url} alt="Heroe" />
      </div>
    );
}

export default Dashboard;