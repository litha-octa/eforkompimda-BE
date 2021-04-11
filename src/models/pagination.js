const dbConn = require('./../../config/db.config');



//exports.getPagination = (query) => {
exports.getPagination = (query) => {
    return new Promise((resolve, reject) => {
        const qs =
            'SELECT all_class.class_id, all_class.class_name, all_class.pricing, category.category_name AS "category", level.level_name AS "level" FROM all_class JOIN category ON all_class.category_id = category.category_id JOIN level ON all_class.level_id = level.level_id'
        const paginate = "LIMIT ? OFFSET ?";
        const qsWithPaginate = qs.concat(" ", paginate);
        // is query.limit truthy value?
        // number 0 => falsy value
        // null | undefined | 0 | "" | false
        const limit = Number(query.limit) || 3;
        // const limit = query.limit ?? 3
        // nullish coalescence
        // null | undefined
        const page = Number(query.page) || 1;
        const offset = (page - 1) * limit;
        //console.log(limit, page, offset);
        dbConn.query(qsWithPaginate, [limit, offset], (err, result) => {
            if (err) return reject(err);

            const qsCount = 'SELECT COUNT(*) AS "count" FROM all_class';
            // escaped character (\) => sehingga tanda yang digunakan sebagai syntax muncul sebagai string
            dbConn.query(qsCount, (err, data) => {
                if (err) return reject(err);

                const { count } = data[0];
                let finalResult = {
                    result,
                    count,
                    page,
                    limit,
                };
                resolve(finalResult);
            });
            // count page next prev
        });
    });
};

//module.exports = getPagination;