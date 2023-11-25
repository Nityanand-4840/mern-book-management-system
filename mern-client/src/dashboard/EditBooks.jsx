import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const {
    book_title,
    author,
    image_url,
    category,
    book_description,
    book_pdf_url,
  } = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookcategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // Handle book submission

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const book_title = form.book_title.value;
    const author = form.author.value;
    const image_url = form.image_url.value;
    const category = form.categoryName.value;
    const book_description = form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;

    const updateBookObj = {
      book_title,
      author,
      image_url,
      category,
      book_pdf_url,
      book_description,
    };
    // console.log(bookObj);

    // update book data
 
    fetch(`http://localhost:3000/book/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data);
      alert("Book is updated successfully");
    })

  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book data </h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4 "
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="book_title" value="Book Title" />
            </div>
            <TextInput
              id="book_title"
              name="book_title"
              type="text"
              placeholder="Book Name"
              required
              defaultValue={book_title}
            />
          </div>

          {/* author name */}
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput
              id="author"
              name="author"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={author}
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="image_url" value=" Book Image URL" />
            </div>
            <TextInput
              id="image_url"
              name="image_url"
              type="text"
              placeholder="Book image URL"
              required
              defaultValue={image_url}
            />
          </div>

          {/* category */}
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="inputState" value=" Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookcategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* book_description */}
        <div>
          <div className="block mb-2">
            <Label htmlFor="book_description" value="Book Description" />
          </div>
          <Textarea
            id="book_description"
            name="book_description"
            placeholder="Write your book description....."
            required
            className="w-full"
            rows={5}
            defaultValue={book_description}
          />
        </div>

        {/* book pdf link */}

        <div>
          <div className="block mb-2">
            <Label htmlFor="book_pdf_url" value="Book PDF URL " />
          </div>
          <TextInput
            id="book_pdf_url"
            name="book_pdf_url"
            placeholder="book pdf url"
            required
            defaultValue={book_pdf_url}
          />
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
