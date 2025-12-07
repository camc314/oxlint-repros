function handle(res) {
    if (user) {
        if (data) {
            res.json(data);
        } else {
            res.status(404).send('Not found');
        }
    } else {
        res.status(401).send('Unauthorized');
    }
}
