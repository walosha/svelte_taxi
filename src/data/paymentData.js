class PaymentData {
  constructor(
    PaymentId,
    DriverName,
    AmountEarned,
    AmountPaid,
    PendingPayment,
    LastPayment
  ) {
    this.PaymentId = PaymentId;
    this.DriverName = DriverName;
    this.AmountEarned = AmountEarned;
    this.AmountPaid = AmountPaid;
    this.PendingPayment = PendingPayment;
    this.LastPayment = LastPayment;
  }
}

export const paymentData = [
  new PaymentData(
    "#001",
    "Olasunkanmi Abe",
    "345,900",
    "127,000",
    "56,000",
    "Yesterday"
  ),
  new PaymentData(
    "#001",
    "Olasunkanmi Abe",
    "345,900",
    "127,000",
    "56,000",
    "Today"
  ),
  new PaymentData(
    "#001",
    "Olasunkanmi Abe",
    "345,900",
    "127,000",
    "56,000",
    "Monday"
  ),
  new PaymentData(
    "#001",
    "Olasunkanmi Abe",
    "345,900",
    "127,000",
    "56,000",
    "Today"
  ),
  new PaymentData(
    "#001",
    "Bakere Abey",
    "345,900",
    "127,000",
    "56,000",
    "Yesterday"
  ),
  new PaymentData(
    "#001",
    "Olawale Tope",
    "345,900",
    "127,000",
    "56,000",
    "Yesterday"
  ),
  new PaymentData(
    "#001",
    "Tope Kola",
    "345,900",
    "127,000",
    "56,000",
    "Yesterday"
  ),
  new PaymentData(
    "#001",
    "Olasunkanmi Abe",
    "45,900",
    "27,000",
    "56,000",
    "Today"
  ),
  new PaymentData(
    "#001",
    "Betty Queen",
    "345,900",
    "127,000",
    "56,000",
    "Yesterday"
  )
];
