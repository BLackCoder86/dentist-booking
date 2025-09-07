const doctors = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Dr. John Doe ${i + 1}`,
  email: `doctor${i + 1}@clinic.com`,
  image: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

export default doctors;
