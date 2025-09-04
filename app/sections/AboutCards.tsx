interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => (
  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#282829] via-[#282829] to-[#1E1E1F] p-6 shadow-[1px_2px_3px_0px] shadow-[#714CDF] transition-all duration-300 hover:shadow-[2px_4px_6px_0px] hover:shadow-[#714CDF]">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#714CDF]/10 text-[#714CDF]">
      <img src={icon} alt={title} className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
    </div>
    <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-400">{description}</p>
  </div>
);

export default function AboutCards() {
  const cards = [
    {
      icon: "/icons/graduation.png",
      title: "Student",
      description: "Aktualnie studiuję Inżynierię i Analizę Danych na Politechnice Rzeszowskiej"
    },
    {
      icon: "/icons/phone.png",
      title: "Aplikacje",
      description: "Tworzę aplikacje desktopowe i mobilne do automatyzacji zadań"
    },
    {
      icon: "/icons/machinelearning.png",
      title: "Machine Learning",
      description: "Rozwijam się w dziedzinie uczenia maszynowego i sztucznej inteligencji"
    },
    {
      icon: "/icons/automation.png",
      title: "Automatyzacja",
      description: "Projektuję rozwiązania automatyzujące codzienne zadania"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
