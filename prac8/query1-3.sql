SELECT first_name, last_name, rental_date
FROM rental INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE return_date IS NULL
ORDER BY rental_date ASC
LIMIT 1;