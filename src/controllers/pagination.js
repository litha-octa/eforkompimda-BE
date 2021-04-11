const paginationModel = require("../models/pagination");

const {
    writeError,
    writeResponsePaginated,
} = require("../helpers/response");


const getPagination = (req, res) => {
    const { query, baseUrl, path, hostname, protocol } = req;
    paginationModel
        .getAllPagination(query)
        .then((finalResult) => {
            const { result, count, page, limit } = finalResult;
            const totalPage = Math.ceil(count / limit);
            // count limit total
            // 8      3     3
            // 10     4     3
            const url =
                protocol + "://" + hostname + ":" + process.env.PORT + baseUrl + path;
            const prev =
                page === 1 ? null : url + `?page=${page - 1}&limit=${query.limit || 3}`;
            const next =
                page === totalPage
                    ? null
                    : url + `?page=${page + 1}&limit=${query.limit || 3}`;
            const info = {
                count,
                page,
                totalPage,
                next,
                prev,
            };
            writeResponsePaginated(res, 200, result, info);
        })
        .catch((err) => {
            console.log(err);
            writeError(res, 500, err);
        });
};

module.exports = getPagination;