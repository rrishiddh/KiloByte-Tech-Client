const Faq = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
        <h1 className="font-bold text-2xl my-6  text-center">User Guide & FAQs</h1>
      <div className="collapse collapse-arrow bg-base-100 border-2 mb-2">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-lg font-medium">
        1.  How can I filter blog posts by category?
        </div>
        <div className="collapse-content text-sm">
          <p>
            On the main blog page, you&apos;ll usually find a sidebar or a
            dropdown menu displaying all available categories. Simply click on
            the category you&apos;re interested in, and the page will display
            only the blog posts that belong to that specific category. This
            allows you to easily find content related to your preferred topics,
            such as AI, Web Development, or Cyber Security etc.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border-2 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">
         2. Where can I find the top 10 most popular blog posts?
        </div>
        <div className="collapse-content  text-sm">
          <p>
            The top 10 most popular blog posts are typically featured on a
            dedicated `Featured Blogs` page. This page often highlights the
            most-read, most-liked, or most-shared articles, providing a quick
            and easy way to discover the most engaging content on the blog.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border-2 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">
         3. How do I access the `Add Blog Post` page?
        </div>
        <div className="collapse-content  text-sm">
          <p>
            The `Add Blog Post` page is private and requires you to log in to
            your user account. Once logged in, you should find a link or button
            labeled `Add Blog Post` in navbar area. This page allows you to
            create and submit new blog posts for consideration.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border-2 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">
         4. What are the two private pages available to logged-in users?
        </div>
        <div className="collapse-content  text-sm">
          <p>
            The two private pages accessible to logged-in users are:
            <ul>
              <li>
                `Add Blog Post`: As mentioned earlier, this page allows you to
                create and submit new blog posts.
              </li>
              <li>
                `Wishlist`: This page enables you to save blog posts or articles
                that you&apos;re interested in reading or referencing later. It
                acts as a personal bookmarking system for your favorite tech
                content.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border-2 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">
        5. How do I provide feedback on a blog post?
        </div>
        <div className="collapse-content  text-sm">
          <p>Most blog posts will include a comments section where you can leave your feedback, questions, or thoughts. You can also often find social media sharing buttons beneath each post, allowing you to share it with your network and engage with others who have read it. Additionally, some blogs may have a dedicated contact form or email address for general feedback or inquiries.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
