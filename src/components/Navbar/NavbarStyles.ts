export const NavbarStyles = {
    mainContainer : {
        width:'100%',
        padding:'20px 6%',
        display:'flex',
        justifyContent:'space-between',
        position: 'fixed' as 'fixed', 
        fontSize: '14px',
        color:'#e5e5e5',
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)',
        zIndex:1,
    },
    navbarLeft: {
       display:'flex',
       alignItems:'center',
       gap:'50px'
    },
    ul:{
        display:'flex',
        gap:'20px',
        listStyle:'none'
    },
    li:{
        cursor:'pointer',

    },

    navbarLeftImg:{
        width:'90px'
    },
    navbarRight: {
       display:'flex',
       alignItems:'center',
       gap:'20px'
    },
    icons:{
        cursor:'pointer'
    },
    profile:{
        display:'flex',
        alignItems:'center',
        gap:'12px',
        cursor:'pointer',
        position:'relative' as 'relative'
    },
    profileIcon: {
        cursor:'pointer',
        width:'35px'
    },
    dropDown:{
        position:'absolute' as 'absolute',
        top:'100%',
        right:'0',
        width:'max-content',
        background:'#191919',
        padding:'18px 22px',
        borderRadius:'4px',
        textDecoration:'underline',
        zIndex:1,
        display:'none'
    },
    dropDownPara:{
        fontSize:'13px',
        cursor:'pointer'
    },
    dropDownVisible: {
        display: 'block',
    },
}
