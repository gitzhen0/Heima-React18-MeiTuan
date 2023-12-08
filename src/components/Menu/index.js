import classNames from 'classnames'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchFoodsList } from '../../store/modules/takeaway'

const Menu = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFoodsList())
  }, [dispatch])

  const { foodsList } = useSelector(state => state.foods)

  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames(
              'list-menu-item',
              'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu