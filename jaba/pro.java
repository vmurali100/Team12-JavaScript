class pro {
    public static void main(String[] args) {
        int n = 17;
        if (isPrime(n, 2))
            System.out.println("yes it's prime ");
        else
            System.out.println("not a  prime");
    }

    public static boolean isPrime(int n, int m) {
        if (n <= 2)
            return (n == 2) ? true : false;
        if (n % m == 0)
            return false;
        if (n * m > n)
            return true;
        return isPrime(n, m + 1);
    }
}