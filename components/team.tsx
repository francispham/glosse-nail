import Link from "next/link";
import Image from "next/image";

const MEMBERS = [
  {
    name: "Kate Tran",
    id: "1",
    role: "Nail Artist",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629562411/mbmxsowwkwkre26cy2ez.png",
    link: "#",
  },
  {
    name: "Tracy Doan",
    id: "2",
    role: "Nail Artist",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629503635/h1sbkzcehid1aqyz3axk.png",
    link: "#",
  },
  {
    name: "Olley Tran",
    id: "3",
    role: "Nail Artist",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629426138/lal52cozofe7iqoi4h4h.jpg",
    link: "#",
  },
  {
    name: "Karen Dinh",
    id: "4",
    role: "Nail Artist",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629426138/lal52cozofe7iqoi4h4h.jpg",
    link: "#",
  },
  {
    name: "Kim Lang",
    id: "5",
    role: "Nail Artist",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629426138/lal52cozofe7iqoi4h4h.jpg",
    link: "#",
  },
  {
    name: "Kaylee Tran",
    id: "6",
    role: "Nail Artist",
    avatar:
      "https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629426138/lal52cozofe7iqoi4h4h.jpg",
    link: "#",
  },
] as const;

export default function TeamSection() {
  return (
    <section className="dark:bg-transparent  py-16 md:py-32" id="team">
      <div className="mx-auto max-w-5xl border-t px-6">
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
            {MEMBERS.map((member) => (
              <div key={member.id} className="group overflow-hidden">
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
                    <span className="text-xs">_0{member.id}</span>
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
