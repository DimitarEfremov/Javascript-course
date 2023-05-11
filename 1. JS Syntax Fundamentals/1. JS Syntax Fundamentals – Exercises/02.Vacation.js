function vacation(groupSize, type, day) {

    let price = 0;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }

            if (groupSize >= 30) {
                price *= 0.85;
            }
            break;

        case 'Business':
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }

            if (groupSize >= 100) {
                groupSize -= 10;
            }

            break;

        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }

            if (groupSize >= 10 && groupSize <= 20) {
                price *= 0.95;
            }

            break;

    }
    console.log(`Total price: ${(price * groupSize).toFixed(2)}`);

}

vacation(30, "Students", "Sunday")

vacation(40, "Regular", "Saturday")