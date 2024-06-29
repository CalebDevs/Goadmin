const stats = [
    { id: 1, name: 'New', value: '6,000' },
    { id: 2, name: 'New', value: '6,000' },
    { id: 3, name: 'New', value: '6,000' },
    { id: 4, name: 'New', value: '6,000' },
    { id: 5, name: 'New', value: '6,000' },
    { id: 6, name: 'New', value: '6,000' },
    { id: 7, name: 'New', value: '6,000' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-8">
        <div className="mx-auto max-w-10xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-2 gap-y-16 text-center lg:grid-cols-7">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-2 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  