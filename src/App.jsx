import "./App.css";
import Navbar from "./component/Navbar";
import AddForm from "./component/AddForm";
import Layout from "./component/Layout";
import Title from "./component/Title";
import MainNoteList from "./component/MainNoteList";

export default function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Title />
        <AddForm />
        <MainNoteList />
      </Layout>
    </>
  );
}
