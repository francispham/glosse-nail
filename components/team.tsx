import Link from "next/link";
import Image from "next/image";

const MEMBERS = [
  {
    name: "Liam Brown",
    role: "Founder - CEO",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629562411/mbmxsowwkwkre26cy2ez.png",
    link: "#",
  },
  {
    name: "Elijah Jones",
    role: "Co-Founder - CTO",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629503635/h1sbkzcehid1aqyz3axk.png",
    link: "#",
  },
  {
    name: "Isabella Garcia",
    role: "Sales Manager",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629426138/lal52cozofe7iqoi4h4h.jpg",
    link: "#",
  },
  {
    name: "Henry Lee",
    role: "UX Engineer",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1625253722/ecommerce/60df67594d698abec41fd77c.jpg",
    link: "#",
  },
  {
    name: "Ava Williams",
    role: "Interaction Designer",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629425460/e28bytoz4r8ijktbp9v6.jpg",
    link: "#",
  },
  {
    name: "Olivia Miller",
    role: "Visual Designer",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629425837/n5neqe4j7q8njzvf0tne.jpg",
    link: "#",
  },
] as const;

export default function TeamSection() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-32 dark:bg-transparent"
      id="team"
    >
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Team
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Booking with Our Dream Team
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              During the working process, we perform regular fitting with the
              client because he is the only person who can feel whether a new
              suit fits or not.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <Image
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {" "}
                      Linktree
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
