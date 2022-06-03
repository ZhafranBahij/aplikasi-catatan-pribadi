export default function Layout(props) {
  return (
    <>
      <div className="bg-gray-900 min-h-screen text-pink-300 px-8 py-5">
        {props.children}
      </div>
    </>
  );
}
