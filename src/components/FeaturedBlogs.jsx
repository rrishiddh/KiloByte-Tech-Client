import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const FeaturedBlogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    const fetchTopBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/featuredBlogPosts"
        );
        setTopBlogs(response.data);
      } catch (error) {
        console.error("Error fetching top blogs:", error);
      }
    };

    fetchTopBlogs();
  }, []);

  const columns = [
    {
      accessorKey: "title",
      header: "Blog Title",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "shortDescription",
      header: "Short Description",
    },
    {
      accessorKey: "longDescription",
      header: "Long Description",
    },
    {
      id: "viewPost",
      header: "View Post",
      cell: ({ row }) => (
        <Link to={`/allBlogPosts/${row.original._id}`}>
          <button className="btn btn-active btn-ghost btn-xs">Click..</button>
        </Link>
      ),
    },
  ];

  const table = useReactTable({
    data: topBlogs,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="min-h-screen">
      <div className="text-center">
        <h1 className="my-6 text-2xl">Find Out Top 10 Posts!</h1>
        <p className="italic text-sm font-thin mb-4">
          Column of the table is sortable by clicking on the column header
        </p>
      </div>
      <div className="mb-10">
        {topBlogs && topBlogs.length ? (
          <div className="overflow-x-auto w-[90%] rounded-xl mx-auto">
            <table className="table-auto w-full border  border-gray-300">
              <thead className="bg-gradient-to-r from-[#29dadd] to-[#787878]">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-4 py-2 cursor-pointer"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted()
                          ? header.column.getIsSorted() === "asc"
                            ? " \u25B2"
                            : " \u25BC"
                          : null}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border-t ">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-2 text-xs">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-xl text-red-500 py-10">
            No Data Available, Add WishList First!
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
