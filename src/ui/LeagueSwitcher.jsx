import Button from "./Button";

const LeagueSwitcher = () => {
    return (
        <section className="py-4 border-b border-[#434343]/50">
            <div className="flex items-start justify-around px-4">
                <Button league="Premier League" />
                <Button league="La Liga" />
                <Button league="Bundesliga" />
                <Button league="Uefa Champions League" />
            </div>
        </section>
    );
};

export default LeagueSwitcher;
