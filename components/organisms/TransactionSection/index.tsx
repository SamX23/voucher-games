import TransactionStep from "../../molecule/TransactionStep";

const Transaction = () => (
  <section id="feature" className="feature pt-50 pb-50">
    <div className="container-fluid">
      <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
        It&apos;s Really That <br /> Easy to Win the Game
      </h2>
      <div className="row gap-lg-0 gap-4" data-aos="fade-up">
        <TransactionStep
          icon="transaction-1"
          title="1. Start"
          subtitle="Pilih salah satu game yang ingin kamu top up"
        />
        <TransactionStep
          icon="transaction-2"
          title="2. Fill Up"
          subtitle="Top up sesuai dengan nominal yang sudah tersedia"
        />
        <TransactionStep
          icon="transaction-3"
          title="3. Be a Winner"
          subtitle="Siap digunakan untuk improve permainan kamu"
        />
      </div>
    </div>
  </section>
);

export default Transaction;
