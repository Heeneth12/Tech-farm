import React, { useState, useEffect } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false); // Disable auto-cancellation globally

const BlogSection = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const resultList = await pb.collection("community").getList(1, 50, {
          filter: 'created >= "2022-01-01 00:00:00"',
        });
        setRecords(resultList);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }, []);

  console.log(records);
  console.log("log here");

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Blog Posts
        </h1>

        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(records.items) && records.items.length > 0 ? (
            records.items.map((post) => (
              <div key={post.id} className="border p-4 rounded shadow">
                <h2 className="text-lg font-bold">{post.head_lines}</h2>
                <p className="text-sm text-gray-600 mt-2">{post.chat}</p>
                <div className="flex justify-between items-center mt-4">
                  <h1
                    className="font-bold "
                    style={{
                      marginBottom: "0",
                    }}
                  >
                    {post.name}
                  </h1>
                  <p className="text-xs text-gray-500">
                    {new Date(post.created).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No records found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
