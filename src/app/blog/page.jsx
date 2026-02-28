export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <section className="text-center mb-12">
        <span className="badge badge-primary mb-4">Technology • Gadgets</span>
        <h1 className="text-4xl font-bold leading-tight mt-3">
          Why Smart Gadgets Are Shaping the Future of Everyday Life
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          From productivity to entertainment, modern technology is redefining
          how we work, live, and connect.
        </p>
      </section>

      {/* Featured Image */}
      <section className="mb-10">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Modern tech gadgets"
          className="w-full h-[420px] object-cover rounded-2xl shadow"
        />
      </section>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none">
        <p>
          Technology has become an essential part of modern life. With rapid
          innovation in <strong>smart gadgets</strong>, consumers now have
          access to tools that improve efficiency, convenience, and
          connectivity like never before.
        </p>

        <h2>Technology That Simplifies Life</h2>
        <p>
          Smart devices such as smartphones, wearables, and home automation
          systems help users manage daily tasks effortlessly. These gadgets
          reduce manual effort while increasing speed, accuracy, and comfort.
        </p>

        <blockquote>
          “Technology is best when it brings people together.” — Matt
          Mullenweg
        </blockquote>

        <h2>Boosting Productivity & Performance</h2>
        <p>
          From high-performance laptops to AI-powered tools, modern gadgets are
          designed to maximize productivity. Faster processors, cloud
          integration, and intelligent software allow users to work smarter,
          not harder.
        </p>

        <ul>
          <li>Improves workflow efficiency</li>
          <li>Enhances multitasking capabilities</li>
          <li>Supports remote and flexible work</li>
        </ul>

        <h2>Innovation Meets Creativity</h2>
        <p>
          Technology empowers creativity through advanced cameras, design
          software, and immersive experiences like AR and VR. Creators can
          produce, edit, and share content at a professional level using
          compact, powerful devices.
        </p>

        <h2>Security & Smart Design</h2>
        <p>
          Today’s gadgets are built with user security and data privacy in
          mind. Features like biometric authentication, encryption, and
          regular software updates help ensure safe and reliable usage.
        </p>

        <p>
          Investing in the right technology is not just about owning devices —
          it’s about staying connected to the future.
        </p>
      </article>

      {/* Author Box */}
      <section className="mt-16 flex items-center gap-4 p-6 bg-base-200 rounded-2xl">
        <img
          src="https://i.pravatar.cc/100?img=32"
          className="w-16 h-16 rounded-full"
          alt="Author"
        />
        <div>
          <h4 className="font-semibold">TechSphere Editorial Team</h4>
          <p className="text-sm text-gray-600">
            Covering the latest trends in gadgets, innovation, and digital
            technology.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Discover the Latest Tech & Gadgets
        </h3>
        <button className="btn btn-primary btn-wide">
          Back To Home
        </button>
      </section>
    </main>
  );
}
