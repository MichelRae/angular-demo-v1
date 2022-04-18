export interface Page<T> {
  "content": T [],
  "pageable": {
    "sort": {
      "sorted": boolean,
      "unsorted": boolean,
      "empty": boolean
    },
    "offset": number,
    "pageSize": number,
    "pageNumber": number,
    "paged": boolean,
    "unpaged": boolean
  },
  "totalPages": number,
  "last": boolean,
  "totalElements": number,
  "size": number,
  "number": number,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "numberOfElements": 0,
  "first": boolean,
  "empty": boolean
}
