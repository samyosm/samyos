interface Props {
  params: {
    app: string;
  };
}

export default async function Index({ params }: Props) {
  return (
    <div className="min-h-screen bg-indigo-500 text-white font-bold text-3xl flex items-center justify-center">
      <p>Dashboard! {params.app}</p>
    </div>
  );
}
