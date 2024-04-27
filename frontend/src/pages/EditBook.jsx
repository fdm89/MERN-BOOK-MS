import { useState, useEffect } from "react";
import BackButton from "../component/BackButton";
import Spinner from "../component/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const getBookById = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5555/books/${id}`);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookById(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleEditBook = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5555/books/${id}`, {
        method: "PATCH",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to save book");
      }

      setBook({
        title: "",
        author: "",
        publishYear: "",
      });
      enqueueSnackbar("Book Edited successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      console.error("Error saving book:", error);
      enqueueSnackbar("Error", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-sly-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={book.title}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            name="title"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={book.author}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            name="author"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={book.publishYear}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            name="publishYear"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
